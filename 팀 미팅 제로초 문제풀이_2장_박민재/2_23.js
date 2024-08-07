// p.177
[1, 2, 3, 4, 5].reduce((a, c) => {
  a[c] = c * 10;
  return a;
}, {});

/*
  a   
  {1: 10}   {1: 10, 2: 20}    {1: 10, 2: 20, 3: 30}    {1: 10, 2: 20, 3: 30, 4: 40}
  
  c * 10
  20        30                 40                      50

  a(반환값)
  { '1': 10 } { '1': 10, '2': 20 } { '1': 10, '2': 20, '3': 30 } { '1': 10, '2': 20, '3': 30, '4': 40 } { '1': 10, '2': 20, '3': 30, '4': 40, '5': 50 }
*/