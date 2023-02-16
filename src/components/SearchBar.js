import React from 'react'

const SearchBar= ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                disabled={isLoading}
                onChange={onChange}
                placeholder="Search Recipes"
                className='form-control'/>
             <input 
                disabled={isLoading || !value}
                type ="submit"
                className ="btn"
                value="Search"/>
        </form>
    </div>
  )
}

export default SearchBar