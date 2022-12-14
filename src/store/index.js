import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutArticle: [
      {
        title: 'you are going to fall in love with nature',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste non rem sequi sunt? Explicabo iure quaerat reprehenderit vitae. Aperiam consequatur ex iste quibusdam ullam'
      },
      {
        title: 'live adventures like you have never before',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste non rem sequi sunt? Explicabo iure quaerat'
      }
    ],

    featureContent: [
      {
        src: require('../assets/icons/basic_world.svg'),
        title: 'explore the world',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste non rem sequi non rem sequi'
      },
      {
        src: require('../assets/icons/basic_compass.svg'),
        title: 'meet nature',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste non rem sequi non rem sequi'
      },
      {
        src: require('../assets/icons/basic_map.svg'),
        title: 'find your way',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste non rem sequi non rem sequi'
      },
      {
        src: require('../assets/icons/basic_heart.svg'),
        title: 'live a healthier life',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iste non rem sequi non rem sequi'
      },
    ],

    toursCards: [
      {
        class: 'orange',
        title: 'the sea explorer',
        days: '3',
        people: '30',
        guides: '2',
        sleep: 'cozy hotels',
        difficulty: 'very easy',
        price: '297'
      },
      {
        class: 'green',
        title: 'the forest hiker',
        days: '7',
        people: '40',
        guides: '6',
        sleep: 'provided tents',
        difficulty: 'medium',
        price: '497'
      },
      {
        class: 'blue',
        title: 'the snow adventurer',
        days: '5',
        people: '15',
        guides: '3',
        sleep: 'provided tents',
        difficulty: 'hard',
        price: '897'
      }
    ],

    storiesCards: [
      {
        name: 'mary smith',
        img: require('../assets/starter/nat-8.jpg'),
        title: 'i had the best week ever with my family',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut facere harum qui recusandae? Amet atque consequatur cupiditate dolor ducimus exercitationem explicabo in, minus nesciunt nostrum odio quia ullam ut veritatis.'
      },
      {
        name: 'jon smith',
        img: require('../assets/starter/nat-9.jpg'),
        title: 'wow! my life is completely different now',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut facere harum qui recusandae? Amet atque consequatur cupiditate dolor ducimus exercitationem explicabo in, minus nesciunt nostrum odio quia ullam ut veritatis.'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
