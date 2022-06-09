import React from "react";

   const Form = (props) => {
        const [formData, setFormData] = React.useState({
        searchterm: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which i
        props.moviesearch(formData.searchterm);
    }
     return(
         
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="searchterm" 
            onChange={handleChange} 
            value={formData.searchterm} 
            />

            <input type="submit" value="Search" />
           
        </form>
    );
};

export default Form;
