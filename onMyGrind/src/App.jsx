import React, {useState} from 'react'
import './App.css'
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json";


const App = () => {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const onNewDrink = () =>{
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        getNextDrink();
    }

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
        } else {
            setCheckedTemperature("correct");
        }

        if (trueRecipe.syrup != inputs['syrup']){
            setCheckedSyrup('wrong');
        } else {
            setCheckedSyrup("correct");
        }

        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
        } else {
            setCheckedMilk("correct");
        }

        if (trueRecipe.blended != inputs['blended']){
            setCheckedBlended('wrong');
        } else {
            setCheckedBlended("correct");
        }
    }

    return (
        <div>
            <div className='intro'>
                <h2>Hi, I'd like to order a:</h2>
                <div className='drink-container'>
                    <h3>{currentDrink}</h3>
                    <button onClick={onNewDrink}>New Drink</button>
                </div>
            </div>
            
            <div className='answer'>
                <div className="recipe-choice">
                <h3>Temperature</h3>
                <div className="answer-space" id={correct_temp}>
                {inputs["temperature"]} 
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="temperature"
                choices={ingredients["temperature"]}
                checked={inputs["temperature"]}
                />
            </div>
        
            <div className='recipe-choice'>
                <h3>Syrup</h3>
                <div className="answer-space" id={correct_syrup}>
                {inputs["syrup"]} 
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="syrup"
                choices={ingredients["syrup"]}
                checked={inputs["syrup"]}
                />
            </div>

            <div className='recipe-choice'>
                <h3>Milk</h3>
                <div className='answer-space' id={correct_milk}>
                    {inputs["milk"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />
            </div>

            <div className='recipe-choice'>
                <h3>Blended</h3>
                <div className='answer-space' id={correct_blended}>
                    {inputs["blended"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
            </div>
            </div>
            

            <button onClick={onCheckAnswer}>Check</button>

        </div>
    )
}

export default App
