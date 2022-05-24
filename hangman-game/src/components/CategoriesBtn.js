import React from 'react';
import Button from 'react-bootstrap/Button';

class ChooseWords extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.innerText);
        this.chosenCategory = e.target.innerText;
        console.log(this.chosenCategory)
        sessionStorage.setItem("category", this.chosenCategory)
        this.SpecialNumber = this.categories[this.chosenCategory]
        console.log(this.SpecialNumber)
        this.ChosenCategoryWords = this.all_categories[this.SpecialNumber]
        console.log(this.ChosenCategoryWords)
        this.RandomNumber = Math.floor(Math.random() * this.ChosenCategoryWords.length)
        console.log(this.RandomNumber)
        this.RandomWord = this.ChosenCategoryWords[this.RandomNumber]
        console.log(this.RandomWord)
        sessionStorage.setItem("word", this.RandomWord)
        window.location.reload();
    };

    categories = {
        "Animals" : 0,
        "Fruits" : 1,
        "Languages" : 2,
        "Countries" : 3,
    }

    all_categories = [
        ['lion', 'tiger', 'zebra', 'alligator', 'horse', 'monkey', 'otter', 'fish', 'penguin'],
        ['apple', 'orange', 'pear', 'durian', 'jackfruit', 'watermelon', 'mango', 'banana'],
        ['chinese', 'french', 'italian', 'english', 'japanese', 'korean', 'spanish', 'german', 'thai'], 
        ['china', 'spain', 'paris', 'united states', 'germany', 'korea', 'japan', 'malaysia', 'thailand', 'england']
        ];

    render() {
        return (
            <div className="text-center">
                <Button className="m-4" variant="outline-primary" size="lg" onClick={this.handleClick}>Animals</Button>
                <br></br>
                <Button className="m-4" variant="outline-primary" size="lg" onClick={this.handleClick}>Fruits</Button>
                <br></br>
                <Button className="m-4" variant="outline-primary" size="lg" onClick={this.handleClick}>Languages</Button>
                <br></br>
                <Button className="m-4" variant="outline-primary" size="lg" onClick={this.handleClick}>Countries</Button>
                <br></br>
            </div>
        )
    }
}


export default ChooseWords;