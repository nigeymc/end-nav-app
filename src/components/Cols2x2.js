import React from "react";

class Cols3x1 extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { catName, colOne, colTwo, images } = this.props;

        return (
            <div className="dropdown">
                <div className="center-nav">
                    <button className="dropbtn">{catName}</button>
                </div>
                <div className="dropdown-content">
                    <div className="col-1">
                        <ul>
                            {Object.values(colOne).map((val, index) =>
                                <li key={val.id}><a href={val.url_path}>{val.name}</a></li>
                            )}
                        </ul>
                    </div>
                    <ul className="col-2">
                        {Object.values(colTwo).map(val =>
                            <li key={val.id}><a href={val.url_path}>{val.name}</a></li>
                        )}
                    </ul>
                    <ul className="col-3">

                        {images.slice(0, 2).map((item, index) => (
                            <li>
                                <a href={item.dropdown_image_link}><img src={item.dropdown_image_url} alt={item.dropdown_image_title} /><span>{item.dropdown_image_title}</span></a>

                            </li>
                        ))}

                    </ul>
                    <ul className="col-4">
                        {images.slice(2, 4).map((item, index) => (
                            <li>
                                <a href={item.dropdown_image_link}><img src={item.dropdown_image_url} alt={item.dropdown_image_title} /><span>{item.dropdown_image_title}</span></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cols3x1;