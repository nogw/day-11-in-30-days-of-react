import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  max-height: 640px;
  min-width: 400px;
  max-width: 655px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.05);
  background-color: #fff;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content:center;
  flex-flow: wrap;
`;

export const Item = styled(motion.div)`
  background-color: #EBEBF3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 180px;
  min-width: 180px;
  margin: 10px;

  input {
    outline: none;
  }

  .default {
    background-color: #4A56C2;
    color: #fff;
    border: none;
    padding: 18px;
    border-radius: 8px;
    &::placeholder {
      color: #fff;
      font-weight: bold;
      font-size: 15px;
    }
  }

  .color {
    background-color: #4A56C2;
    color: #fff;
    border: none;
    height: 50px;
    width: 50px;
    padding: 10px;
    -webkit-appearance: none;
    border-radius: 10px;
  }

  .date {
    background-color: #4A56C2;
    color: #fff;
    border: none;
    padding: 18px;
    border-radius: 8px;
    font-weight: bold;
  }

  .range {
    -webkit-appearance: none;
	background: transparent;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: #4a56c2;
		margin-top: -5px;
		box-shadow: 1px 1px 2px rgba(#000, 0.5);

		cursor: pointer;
		
	}

	&::-webkit-slider-runnable-track {
		width: 60%;
		height: 9px;
		background: #4a56c2;
		border-radius: 3rem;

		transition: all 0.5s;
		cursor: pointer;
	}

	// IE

	&::-ms-track {
		width: 60%;
		cursor: pointer;
		height: 9px;

		transition: all 0.5s;
		border-color: transparent;
		color: transparent;
	}

	&::-ms-thumb {
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: #ffffff;
		margin-top: -5px;
		box-shadow: 1px 1px 2px rgba(#000, 0.5);

		cursor: pointer;
	}

	&::-ms-fill-lower {
		background: #4a56c2;
		border-radius: 3rem;
	}

	&::-ms-fill-upper {
		background: #4a56c2;
		border-radius: 3rem;
	}


	&::-moz-range-thumb {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		background:#4a56c2;
    border: 4px solid #979EE8;
		margin-top: -5px;
		box-shadow: 1px 1px 2px rgba(#000, 0.5);

		cursor: pointer;
	}

	&::-moz-range-track {
		width: 100%;
		height: 10px;
		background: #4a56c2;
		border-radius: 3rem;

		transition: all 0.5s;
		cursor: pointer;
	}

  }
`;
