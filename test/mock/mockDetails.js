
const mockDetails = {
  id: 1,
  types: [
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/'
      }
    },
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/'
      }
    }
  ],
  height: 7,
  abilities: [
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/'
      },
      is_hidden: true,
      slot: 3
    },
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/'
      },
      is_hidden: false,
      slot: 1
    }
  ],
  name: 'bulbasaur'
}

export default mockDetails
