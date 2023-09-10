import {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import User from './components/User';
import Company from './components/Company';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/api/users/new">Show User</Link>
          </li>
          <li>
            <Link to="/api/companies/new">Show Company</Link>
          </li>
          <li>
            <Link to="/api/user/company">Show User and Company</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/api/users/new" element={<UserData />} />
        <Route path="/api/companies/new" element={<CompanyData />} />
        <Route path="/api/user/company" element={<UserAndCompanyData />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5137/api/users/new')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      {userData && <User user={userData} />}
    </div>
  );
}

function CompanyData() {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5137/api/companies/new')
      .then((response) => {
        setCompanyData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching company data:', error);
      });
  }, []);

  return (
    <div>
      {companyData && <Company company={companyData} />}
    </div>
  );
}

function UserAndCompanyData() {
  const [userData, setUserData] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5137/api/users/new')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    axios.get('http://localhost:5137/api/companies/new')
      .then((response) => {
        setCompanyData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching company data:', error);
      });
  }, []);

  return (
    <div>
      {userData && <User user={userData} />}
      {companyData && <Company company={companyData} />}
    </div>
  );
}

export default App;
