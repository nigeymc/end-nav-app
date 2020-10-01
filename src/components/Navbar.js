import React from 'react';
import Cols2x2 from './Cols2x2';
import Cols3x1 from './Cols3x1';
import testData from '../assets/json/testData.json';

class Navbar extends React.Component {
    render() {
        const { navCatagories } = testData;
        const firstCatName = navCatagories[0].category_path;
        const secondCatName = navCatagories[1].category_path;
        const thirdCatName = navCatagories[2].category_path;
        const fourthCatName = navCatagories[3].category_path;
        const fifthCatName = navCatagories[4].category_path;
        const sixthCatName = navCatagories[5].category_path;
        const seventhCatName = navCatagories[6].category_path;
        const eighthCatName = navCatagories[7].category_path;

        const latestCats = navCatagories[0].children_data;
        const brandCats = navCatagories[1].children_data;
        const clothingCats = navCatagories[2].children_data;
        const footwearCats = navCatagories[3].children_data;
        const accessoriesCats = navCatagories[4].children_data;
        const lifestyleCats = navCatagories[5].children_data;
        const giftsCats = navCatagories[6].children_data;
        const saleCats = navCatagories[7].children_data;


        const lcFirstCol = latestCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const lcSecondCol = latestCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const lcThirdCol = latestCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const bcFirstCol = brandCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const bcSecondCol = brandCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const bcThirdCol = brandCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const ccFirstCol = clothingCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const ccSecondCol = clothingCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const ccThirdCol = clothingCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const fwFirstCol = footwearCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const fwSecondCol = footwearCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const fwThirdCol = footwearCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const acFirstCol = accessoriesCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const acSecondCol = accessoriesCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const acThirdCol = accessoriesCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const lsFirstCol = lifestyleCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const lsSecondCol = lifestyleCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const lsThirdCol = lifestyleCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const gcFirstCol = giftsCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const gcSecondCol = giftsCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const gcThirdCol = giftsCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const scFirstCol = saleCats.filter((cat) => {
            return (cat.include_in_menu_column2 === false && cat.include_in_menu_column3 === false);
        });

        const scSecondCol = saleCats.filter((cat) => {
            return (cat.include_in_menu_column2);
        });

        const scThirdCol = saleCats.filter((cat) => {
            return (cat.include_in_menu_column3);
        });

        const latestImages = navCatagories;

        return (
            <div id="navigation" className="nav">
                <Cols2x2 catName={firstCatName} colOne={lcFirstCol} colTwo={lcSecondCol} colThree={lcThirdCol} images={latestImages} />
                <Cols3x1 catName={secondCatName} colOne={bcFirstCol} colTwo={bcSecondCol} colThree={bcThirdCol} images={latestImages} />
                <Cols2x2 catName={thirdCatName} colOne={ccFirstCol} colTwo={ccSecondCol} colThree={ccThirdCol} images={latestImages} />
                <Cols2x2 catName={fourthCatName} colOne={fwFirstCol} colTwo={fwSecondCol} colThree={fwThirdCol} images={latestImages} />
                <Cols2x2 catName={fifthCatName} colOne={acFirstCol} colTwo={acSecondCol} colThree={acThirdCol} images={latestImages} />
                <Cols2x2 catName={sixthCatName} colOne={lsFirstCol} colTwo={lsSecondCol} colThree={lsThirdCol} images={latestImages} />
                <Cols2x2 catName={seventhCatName} colOne={gcFirstCol} colTwo={gcSecondCol} colThree={gcThirdCol} images={latestImages} />
                <Cols2x2 catName={eighthCatName} colOne={scFirstCol} colTwo={scSecondCol} colThree={scThirdCol} images={latestImages} />
            </div>
        )
    }
}


export default Navbar;