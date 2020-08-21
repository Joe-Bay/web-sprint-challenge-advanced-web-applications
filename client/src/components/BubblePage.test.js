import React , {useEffect} from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import fetchBubbles from '../api/fetchBubbles'
import ColorList from './ColorList'
import Bubbles from './Bubbles'
import Login from './Login'
import axiosWithAuth from '../utils/axiosWithAuth'

const fetchBubbles = () => {
    axiosWithAuth()
  .get('/api/colors')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  return res
}

jest.mock(getBubbles)
const bubbleData = {
    data:[
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'lilac',
    code: {
      hex: '#9a99dd'
    },
    id: 5
  },
  {
    color: 'softpink',
    code: {
      hex: '#dd99ba'
    },
    id: 6
  },
  {
    color: 'bisque',
    code: {
      hex: '#dd9a99'
    },
    id: 7
  },
  {
    color: 'softyellow',
    code: {
      hex: '#dcdd99'
    },
    id: 8
  },
  {
    color: 'blanchedalmond',
    code: {
      hex: '#ffebcd'
    },
    id: 9
  },
  {
    color: 'blue',
    code: {
      hex: '#6093ca'
    },
    id: 10
  },
  {
    color: 'blueviolet',
    code: {
      hex: '#8a2be2'
    },
    id: 11
  }
]
}


test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  fetchBubbles.mockResolvedValueOnce(bubbleData)
  render(<BubblePage />)


  const blue = await screen.findByText(/blue/i)
  fireEvent.click(blue)
  const aliceblue = screen.findByText(/aliceblue/i)
  const lilac = screen.findByText(/lilac/i)
  const bubbles = screen.findByTestId(/bubbles-test/i)
  expect(await bubbles).toBeInTheDocument()

  

});
