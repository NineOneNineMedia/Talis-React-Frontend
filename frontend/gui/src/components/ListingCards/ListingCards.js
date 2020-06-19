import React from "react";

const ListingCards = (props) => {
    return (
        <div className="row">
            {props.data.map((data) => {
                return (
                    <div className="col-md-6 col-lg-3 mb-4">
                        <a href={`/listings/${data.id}`}>
                            <div key={data.id} className="card shadow zoom rounded-0 listing-preview">
                                <img className="card-img-top rounded-0" src={data.photo_main} alt=""></img>
                                <div className="card-body">
                                    <div className="row text-black-50 justify-content-center text-center p-0">
                                        <div className="col-10">
                                            <span className="text-dark">{data.title}</span>
                                            <br></br>
                                            {data.neighborhood}
                                            <br></br>
                                    Price: {data.lease_length[0]}
                                            <br></br>
                                    Beds: {data.bedrooms.lower}-{data.bedrooms.upper} | Baths:
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    );
}

export default ListingCards;