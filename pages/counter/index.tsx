import React from "react";
import { useDispatch, useSelector } from "react-redux";
import wrapper from "../../modules/store";
import { RootStateInterface } from "interfaces/RootState";
import { CounterState } from "../../modules/interfaces/counter/counter.interface";
import { CounterIncrement,	CounterDecrement,	CounterReset,} from "../../modules/interfaces/counter/counterAction.interface";

const Counter = () => {
	const { count } = useSelector(
		(state: RootStateInterface): CounterState => state.counter,
	);
	const dispatch = useDispatch();
	const handleClick = (num: number) => {
		if (num === 1) {
			dispatch(CounterIncrement());
		} else if (num === 0) {
			dispatch(CounterDecrement());
		} else if (num === 2) {
			dispatch(CounterReset());
		}
	};
	return (
		<div>
			<div>현재값:{count}</div>
			<div>
				<button onClick={() => handleClick(1)}>+</button>
				<button onClick={() => handleClick(0)}>-</button>
				<button onClick={() => handleClick(2)}>reset</button>
			</div>
		</div>
	);
};
export const getStaticProps = wrapper.getStaticProps(async (context) => {
	console.log(context);
});

export default Counter;