import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import {Media, Colors} from '../Themes';
import Button from '../Button';

const Pagination = styled.div`
display: flex;
align-items: stretch;
justify-content: space-between;
padding: 20px 15px;
`

const TableStyled = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 4px 6px;
    ${Media.md`
      padding: 10px 15px;
    `}
  }
  th {
    text-align: left;
    user-select: none;
  }
  tr {
    border-bottom: solid 1px ${Colors.darkGrey};
  }
  tbody {
    > tr {
      &:last-of-type {
        border-bottom: none;
      }
    }
  }
`;
const TableResponsive = styled.div`
  width: 100%;
  overflow-x: auto;
`
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 0, sortColumnIndex: -1, sortType: -1}
  }
  getRows = (d) => {
    return (<tr>
      {this.props.columns.map((c) => this.getCells(d, c))}
    </tr>)
  }
  getCellContent = (data, column) => typeof column.accessor === 'function' ? column.accessor(data) : data[column.accessor]

  getCells = (data, column) => {
    return (<td>{this.getCellContent(data, column)}</td>)
  }
  getTotalPage = () => Math.ceil(this.props.data.length / this.props.pageSize)

  previousPage = () => {
    if (this.state.currentPage > 0) {
      this.setState({currentPage: this.state.currentPage - 1})
    }
  }
  nextPage = () => {
    if (this.state.currentPage < this.getTotalPage() - 1) {
      this.setState({currentPage: this.state.currentPage + 1})
    }
  }

  getSortedData = () => {
    const {sortColumnIndex, sortType} = this.state;
    const {columns, data} = this.props;
    const targetColumn = columns[sortColumnIndex];
    let sortedData = data;
    if (sortColumnIndex === -1 || !targetColumn) {
      return sortedData;
    }

    const accessor = targetColumn.accessor;
    if (targetColumn.sortMethod) {
      sortedData = data.sort((a, b) => targetColumn.sortMethod(this.getCellContent(a, targetColumn), this.getCellContent(b, targetColumn)))
    } else {
      sortedData = _.sortBy(data, accessor)
    }
    if (sortType < 0) {
      sortedData = sortedData.reverse();
    }
    return sortedData;

  }
  getPaginatedData = () => {
    const { data, pageSize } = this.props;
    const { currentPage } = this.state;
    const pageStart =  pageSize * currentPage;
    const pageEnd = pageStart + pageSize;
    return this.getSortedData().slice(pageStart, pageEnd);
  }

  sortTable = (column, columnIndex) => {
    const {sortColumnIndex, sortType} = this.state;
    let newSortType = sortType;
    let newColumnIndex = sortColumnIndex
    if (columnIndex === sortColumnIndex) {
      newSortType = sortType * -1
    } else {
      newSortType = 1
      newColumnIndex = columnIndex;
    }
    this.setState({sortType: newSortType, sortColumnIndex: newColumnIndex});

  }

  render() {
    const { columns, data, pageSize, showPager, previousText, nextText, pageText, ofText, rowsText } = this.props;
    const { currentPage } = this.state;
    const totalPage = this.getTotalPage();
    const paginatedData = this.getPaginatedData();
    return (
      <Fragment>
        <TableResponsive>
          <TableStyled>
            <thead>
              <tr>
                {columns.map((c, i) => <th onClick={() => this.sortTable(c, i)}>{c.Header}</th>)}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map(this.getRows)}
            </tbody>
          </TableStyled>
        </TableResponsive>
        {showPager &&
          <Pagination>
            <Button btnXs onClick={this.previousPage}>{previousText}</Button>
            <div>{pageText} {this.state.currentPage + 1} {ofText} {totalPage}</div>
            <Button btnXs onClick={this.nextPage}>{nextText}</Button>
          </Pagination>
        }
      </Fragment>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
  showPager: PropTypes.bool,
  previousText: PropTypes.string,
  nextText: PropTypes.string,
  pageText: PropTypes.string,
  ofText: PropTypes.string,
};

Table.defaultProps = {
  pageSize: 10,
  showPager: true,
  previousText: 'Previous',
  nextText: 'Next',
  pageText: 'Page',
  ofText: 'of',
};

export default Table;
