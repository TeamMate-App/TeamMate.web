import React from 'react'
import DatePick from './DatePicker/DatePicker'
import HourPick from './HourPicker/HourPicker'


const SearchHome = () => {



    return (
        <div className="searchHome">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Direction, club, city..." aria-label="Recipient's location" aria-describedby="basic-addon2" />
                <select defaultValue="selected" className="form-select" id="inputGroupSelect01">
                    <option defaultValue>Padel</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                </select>
                <DatePick />
                <HourPick />
                <button className="btn btn-outline-success" type="button">Buscar</button>
            </div>
        </div>
    )
}

export default SearchHome