import './CompanyList.css';
import Dropdown from './Dropdown';
import getCompanies from '../apis/getCompanies_KEM';
import { useEffect, useState } from 'react';
import setCategoryEngToKor from '../utils/setCategoryEngToKor';
import convertNumTo100M from '../utils/convertNumTo100M';
import StartupTableHead from './StartupTableHead';
import TitleAndSearch from './TitleAndSearch';

function CompanyListTableBody({ company, rank }) {
  return (
    <div className="company-table-rank-body">
      <div className="body-rank-item0">{rank}위</div>
      <div className="body-rank-item1">
        <div className="body-rank-item1-wrapper">
          <img src={company.imageUrl} alt={company.name} className="company-table-rank-image" />
          <div className="company-table-rank-name">{company.name}</div>
        </div>
      </div>
      <div className="body-rank-item2">
        <div className="body-rank-item2-desc">{company.description}</div>
      </div>
      <div className="body-rank-item3">{setCategoryEngToKor(company.category)}</div>
      <div className="body-rank-item4">{convertNumTo100M(company.actualInvest)}억</div>
      <div className="body-rank-item5">{convertNumTo100M(company.revenue)}억</div>
      <div className="body-rank-item6">{company.employeesCount}명</div>
    </div>
  );
}

export default function CompanlistTableRank() {
  const [companies, setCompanies] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleLoad = async () => {
    const result = await getCompanies();
    setCompanies(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="startup-list">
      <div className="title-search-dropdown">
        <TitleAndSearch keyword={keyword} setKeyword={setKeyword} />
        <Dropdown />
      </div>
      <StartupTableHead />
      {filteredCompanies.map((item, index) => {
        return <CompanyListTableBody key={item.id} company={item} rank={index + 1} />;
      })}
    </div>
  );
}