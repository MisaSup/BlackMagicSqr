import { getRandomValue } from "../app/App";
import "./squares_wrapper.less"

const SquaresWrapper = (props: any) =>
{
    const {letter, setLetter} = props;
    
    if (!letter)
    {
        console.log("rand1");
        setLetter();
    }

    const createItems = () =>
    {
        console.log("creating items");
        const arr: any[] = [];

        for (let i = 0; i < 100; ++i)
        {
            let component: any = (
                <li key={i} className="square_item">
                    <div>{i}</div>
                    <div className="symbol">
                        <div>{i % 9 === 0 ? letter : String.fromCodePoint(getRandomValue())}</div>
                    </div>
                </li>
            )
            arr.push(component);
        }

        return arr;
    }

    return (
        <ul className="squares_wrapper">
            {createItems()}
        </ul>
    );
}

export default SquaresWrapper;