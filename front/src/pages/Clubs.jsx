import React from 'react';
import ClubList from "../components/clubCards/ClubList";

const Clubs = () => {
    return (
        <div>
            <div className="input-group p-5">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
            </div>
            <ClubList/>
        </div>
    );
};

export default Clubs;