(* //1
let rec map f = function
  | [] -> []
  | h :: t -> f h :: map f t


let square = map(fun x -> x * x);;
let cube = map(fun x -> x*x*x);;
let quad = map(fun x -> x*x*x*x);;
u

let lst1 = square[1;2;3;4];;
let lst2 = cube[1;2;3;4];;
let lst3 = quad[1;2;3;4];;


//2
let div3 n =
  n mod 3 = 0;;

let rec filter p = function
  | [] -> []
  | h :: t -> if p h
      then h :: filter p t
      else filter p t;;

let num3 = filter div3;;

num3[1;2;3;4;5;6;7;8;9];; *)


//3
type vehicle = Bike | Motorbike | Car | Lorry
let wheels v = 
  match v with
  | Bike -> 2
  | Motorbike -> 2 
  | Car -> 5
  | Lorry -> 8

wheels 5;;