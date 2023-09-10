import './Company.css'

const Company = ({ company }) => {
  return (
    <div>
      <h2>Id:{company._id}</h2>
      <p>Name: {company.companyName}</p>
      <p>Address: </p>
      <ul>
        <li>{company.street}</li>
        <li>{company.city}</li>
        <li>{company.state}</li>
        <li>{company.zipCode}</li>
        <li>{company.country}</li>
      </ul>
    </div>
  );
};

export default Company;
