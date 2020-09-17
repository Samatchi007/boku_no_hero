import { Hero } from './hero';

const HEROES_tmp: Hero[] = [
  { id: 1, name: 'All Might', desc: "The Greatest" },
  { id: 2, name: 'Endeavor', desc:"Flame hero" },
  { id: 3, name: 'Hawks', desc:"Cool Kid" },
  { id: 4, name: 'Best Jeanist', desc:'Gave (tried) Bakugou a haircut' },
  { id: 5, name: 'Mirko', desc:"Rabbit" },
  { id: 6, name: 'Crust' },
  { id: 7, name: 'Kamui woods', desc:'(:' },
  { id: 8, name: 'Wash', desc:"HOW TF IS HE #8" },
  { id: 9, name: 'Ryukyu', desc:"Drake" },
  { id: 10, name: 'Gang Star', desc:"Goodest boi after Jonathan" },
  { id: 11, name: 'Mount Lady', desc:'OO' }
];

export  const HEROES = HEROES_tmp.map(val => {
      let show = "desc" in val;
      return { ...val, "show": show }
})
