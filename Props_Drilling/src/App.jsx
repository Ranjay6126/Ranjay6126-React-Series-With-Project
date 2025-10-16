
import Card from "./Components/Card";


const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/3PPlTgSjMIkTHavvLZvg0_Jed9kK7tmZw9xvPL3P53c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNjL0dvb2dsZV9G/YXZpY29uXzIwMjUu/c3Zn",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 55, // dollars per hour
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/tDC9Mfm89S-L1vcegJmTgbP6aiinxGY7ckvupwi-n4M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE2L2Mx/Lzk0LzE2YzE5NDk0/OGQ5ZjQ0MWJmNDM2/YTNlYmM4MjkzMWU0/LmpwZw",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/uU9b7LBA01u46O4i-Xh3WyNsbaVVD4mmVNMUF0dhp3g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby1ibGFjay1h/bmQteWVsbG93LXZl/Y3Rvci00Njg2MDEx/MC5qcGc",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/kuInYCg_eL2AKYnGgq6W9VOJQBF_17KB3N3R_wJQ0Eg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/Mjk3NjRiODdlYzc2/YjgyZmIyMWZjZTQu/cG5n",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/BDVjOYxHOCQOLWT5K8K9rkjOGWlrSMxbsPKtM43CqzU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3dzLWxvZ28t/cG5nLWltYWdlcy0z/MC5wbmc",
    companyName: "Microsoft",
    datePosted: "8 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Xr5AE-qF9u_eA3dArDHLnzd2OmEM7V44OSXOCtcAsuk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw",
    companyName: "Uber",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 52,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/J3maYcurw5JTTc1cTfTc1U6uKUrWsjEBgdyivaVcKec/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE0OTA1LnBuZw",
    companyName: "Spotify",
    datePosted: "2 weeks ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/v6alpyDKLxKYgYb0z4dYAN1yCdvaxU27wDwMwPyNbMA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlcml2ZXIuYXNp/YS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMS9wbmdrZXku/Y29tLWFpcmJuYi1s/b2dvLXBuZy02MDU5/NjcucG5n",
    companyName: "Airbnb",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/REIrvqWUv7wJk5mYngaayNnzEvDgIrj6g-rZkrWIevg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgxLzQ1/LzQ5LzgxNDU0OWMz/OTk0ZmFkNjUxYjE2/NDM2NDc1YjVkNDBm/LmpwZw",
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  }
];

console.log(jobOpenings);




  return (
    <div className="parent">

      {jobOpenings.map(function(details,idx){
        console.log(idx);
       
       return <div key={idx}>  
          <Card company={details.companyName} post={details.post} Pyment={details.pay}
           date={details.datePosted} tag={details.tag1} Tag={details.tag2} Location={details.location} 
           logo={details.brandLogo}/>;
        </div>

      })}
    
   </div>
  );
}
export default App;
