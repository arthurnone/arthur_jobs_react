import React from 'react';
import './pagenation.sass';

function Pagination(props) {
  let data = props.handler.state.page;
  let page = data.page;
  let limit = data.limit;
  let count = data.count;
  let totalPage = parseInt(count / limit);
  let min, max;
  let pagelist = [];
  min = page - 4;
  min = min > 0 ? min : 1;
  max = min + 9;
  max = totalPage > max ? max : totalPage;

  for (let i = min; i < max + 1; i++) {
    pagelist.push(i)
  }
  const listItems = pagelist.map((p) =>
    <div key={p}
         className={"page-item text " + (p === page ? 'page-active' : '')}
         onClick={() => props.handler.getData(p, props.handler.state.skill, props.handler.state.position)}
    >
      {p}
    </div>
  );
  return (
    <div className="page">
      {listItems}
    </div>
  );
}

export default Pagination;