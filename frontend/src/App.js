import { useState, useEffect } from 'react';
import Select from './components/Select';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Welcome from './components/Welcome';

import FruitDetail from './components/FruitDetail';

const options = [
  { label: 'Grapes 🍇', value: 'grapes' },
  { label: 'Mango 🥭', value: 'mango' },
  { label: 'Strawberry 🍓', value: 'strawberry' },
  { label: 'Watermelon 🍉', value: 'watermelon' },
  { label: 'Pear 🍐', value: 'pear', disabled: true },
  { label: 'Apple 🍎', value: 'apple' },
  { label: 'Tangerine 🍊', value: 'tangerine' },
  { label: 'Pineapple 🍍', value: 'pineapple' },
  { label: 'Peach 🍑', value: 'peach' },
];
let fruit = {};
//fruit.name = 'Apple2';

export default function App() {
  const [selected, setSelected] = useState([]);
  const [fruits, setFruits] = useState([]);

  const getFruitDetails = (selected) => {
    console.log(selected);

    //setFruits([{ name: 'apple' }, { name: 'pear' }]);
    //setFruits(selected.map((item) => ({ name: item.value })));

    const test1 = selected.map((item) => ({ name: item.value }));
    setFruits(test1);
    //setFruits(selected.map((item) => ({ name: item.value })));

    console.log(fruits);
    //console.log(test1);
  };

  if (fruits.length === 0) {
    fruit = { name: 'nothing selected' };
  } else {
    fruit = fruits[0];
  }

  // useEffect - Function to call is getSavedImages.
  //  Dependency is '[]' means will be called only once
  //     If dependency was '[word]' it would get called whenever word changed
  useEffect(() => getFruitDetails(selected), [selected]);

  // console.log(selected);

  return (
    <div>
      <Select options={options} selected={selected} setSelected={setSelected} />

      <Container className="mt-4">
        {fruits.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {fruits.map((fruit, i) => (
              <Col key={i} className="pb-3">
                <FruitDetail fruit={fruit} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}
