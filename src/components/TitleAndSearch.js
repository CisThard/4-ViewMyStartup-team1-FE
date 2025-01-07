//구은모

import { useState } from 'react';
import iconSearch from '../assets/images/ic_search.png';
import './TitleAndSaerch.css';

function TitleAndSearch({ keyword, setKeyword }) {
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="title">
        <h1>전체 스타트업 목록</h1>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <img
              className="icon-search"
              src={iconSearch}
              alt="검색"
              width="24px"
            />
            <input
              id="searchInput"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="기업명을 입력해주세요"
            />
          </form>
        </div>
      </div>
      {/* <div className="companyList">
          {filteredCompanies.map(company => (
            <div key={company.id} className="companyItem">
              <h2>{company.name}</h2>
              <p>매출액: {company.revenue}</p>
              <p>고용인원: {company.employeesCount}</p>
            </div>
          ))}
        </div> */}
    </>
  );
}

export default TitleAndSearch;
