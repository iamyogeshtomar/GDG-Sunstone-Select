import { useState } from "react";
import Card from "./Card";

const CardContainer = () => {
  const [people, setPeople] = useState([
    { name: "Aarav Sharma", age: 25, city: "Delhi" },
    { name: "Vivaan Mehta", age: 30, city: "Mumbai" },
    { name: "Aditya Singh", age: 28, city: "Bangalore" },
    { name: "Vihaan Gupta", age: 22, city: "Pune" },
    { name: "Arjun Verma", age: 35, city: "Chennai" },
    { name: "Sai Reddy", age: 27, city: "Hyderabad" },
    { name: "Krishna Iyer", age: 31, city: "Kochi" },
    { name: "Ishaan Kapoor", age: 24, city: "Jaipur" },
    { name: "Rohan Das", age: 29, city: "Kolkata" },
    { name: "Kabir Malhotra", age: 33, city: "Ahmedabad" },
    { name: "Ananya Joshi", age: 26, city: "Lucknow" },
    { name: "Diya Nair", age: 21, city: "Thiruvananthapuram" },
    { name: "Saanvi Bhatia", age: 34, city: "Chandigarh" },
    { name: "Myra Choudhary", age: 23, city: "Indore" },
    { name: "Aadhya Kulkarni", age: 32, city: "Nagpur" },
    { name: "Riya Sethi", age: 27, city: "Bhopal" },
    { name: "Pari Desai", age: 29, city: "Surat" },
    { name: "Avni Pillai", age: 36, city: "Coimbatore" },
    { name: "Navya Rao", age: 28, city: "Visakhapatnam" },
    { name: "Meera Saxena", age: 24, city: "Noida" },
    { name: "Yash Thakur", age: 31, city: "Gurgaon" },
    { name: "Harsh Vyas", age: 26, city: "Rajkot" },
    { name: "Manav Arora", age: 30, city: "Dehradun" },
    { name: "Dev Patel", age: 22, city: "Vadodara" },
    { name: "Kunal Khanna", age: 34, city: "Amritsar" },
    { name: "Aryan Tiwari", age: 27, city: "Kanpur" },
    { name: "Nikhil Soni", age: 29, city: "Udaipur" },
    { name: "Rahul Jain", age: 33, city: "Jodhpur" },
    { name: "Tanvi Kapoor", age: 25, city: "Mysore" },
    { name: "Sneha Dubey", age: 28, city: "Patna" },
  ]);
  return (
    <>
      {people.map((person) => {
        <Card name={person.name} age={person.age} city={person.city} />;
      })}
    </>
  );
};
export default CardContainer;
