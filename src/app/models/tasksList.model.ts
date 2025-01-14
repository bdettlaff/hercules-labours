import { Category } from "./category.model";
import { Task } from "./task.model";
import { Technology } from "./technology.model";

export class TasksList{
    public tasks = [
    new Technology(1, 'PHP', [
      new Category(1, 'Zmienne, wyświetlanie i wypisywanie', [
        new Task(1, 'Połączenie z bazą danych', 'Zadanie polega na stworzeniu połączenia z bazą danych MySQL w PHP.', 'Host: localhost\nBaza: test\nUżytkownik: root', 'Połączenie pomyślnie nawiązane'),
        new Task(2, 'Obsługa formularza kontaktowego', 'Zadanie polega na obsłudze formularza kontaktowego w PHP.', 'Imię: Jan\nEmail: jan@example.com', 'Formularz został wysłany pomyślnie')
      ]),
      new Category(2, 'Instrukcje Warunkowe', []),
      new Category(3, 'Pętle', []),
      new Category(4, 'Tablice', []),
      new Category(5, 'Tablice dwuwymiarowe', []),
    ]),
    new Technology(2, 'JavaScript', [
      new Category(1, 'Zmienne, wyświetlanie i wypisywanie', [
        new Task(1, 'Pobieranie wartości zmiennej', 'Pobierz od użytkownika liczbę, przypisz wartość do zmiennej i ją wyświetl.', '10', '10'), 
        new Task(2, 'Konkatenacja tekstów', 'Połącz dwa teksty w jeden.', 'Hello\nWorld', 'Hello World'),
        new Task(3, 'Zmiana wartości zmiennej', 'Stwórz zmienną x = 5. Pobierz i przypisz nową wartość do zmiennej i ją wyświetl.', '10', '10'),
        new Task(4, 'Mnożenie zmiennych', 'Oblicz iloczyn dwóch zmiennych i wyświetl wynik.', '5\n4', '20'),
        new Task(5, 'Obliczanie długości tekstu', 'Oblicz długość tekstu.', 'Bartek', '6'),
        new Task(6, 'Operacja dodawania zmiennych', 'Dodaj dwie liczby i wyświetl wynik.', '10\n15', '25'),
        new Task(7, 'Pobieranie wartości z tablicy', 'Stwórz tablicę z liczbami 1,2,3,4,5. Wyświetl wartość na podanym indeksie tablicy.', '2', '3'),
        new Task(8, 'Porównywanie dwóch zmiennych', 'Porównaj dwie liczby. Jeśli są równe, wypisz "Tak", w przeciwnym razie "Nie"', '5\n5', 'Tak'),
        new Task(9, 'Obliczanie różnicy dwóch zmiennych', 'Oblicz różnicę dwóch liczb i wyświetl wynik.', '30\n12', '18')
      ]),
      new Category(2, 'Instrukcje Warunkowe', [
        new Task(1, 'Sprawdzenie liczby dodatniej', 'Sprawdź, czy liczba jest dodatnia, ujemna czy równa zero.', '5', 'Dodatnia'),
        new Task(2, 'Określenie parzystości liczby', 'Sprawdź, czy liczba jest parzysta czy nieparzysta.', '7', 'Nieparzysta'),
        new Task(3, 'Określenie większej liczby', 'Porównaj dwie liczby i wyświetl większą z nich.', '8\n12', '12'),
        new Task(4, 'Klasyfikacja wieku', 'Na podstawie wieku użytkownika, określ kategorię: dziecko (0-12), nastolatek (13-19), dorosły (20+).', '15', 'Nastolatek'),
        new Task(5, 'Ocena wyników', 'Na podstawie liczby punktów (0-100), przypisz ocenę: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).', '85', 'B'),
        new Task(6, 'Sprawdzanie przedziału', 'Sprawdź, czy liczba mieści się w przedziale (10, 50).', '25', 'Mieści się'),
        new Task(7, 'Określenie pory roku', 'Na podstawie numeru miesiąca (1-12), określ porę roku.', '3', 'Wiosna'),
        new Task(8, 'Określenie dni tygodnia', 'Na podstawie numeru dnia (1-7), wyświetl nazwę dnia tygodnia.', '5', 'Piątek'),
        new Task(9, 'Określenie znaku liczby', 'Sprawdź, czy liczba jest dodatnia, ujemna czy równa zero za pomocą switch.', '0', 'Zero'),
        new Task(10, 'Operacja arytmetyczna', 'Na podstawie operatora (+, -, *, /) wykonaj odpowiednią operację na dwóch liczbach.', '5\n3\n+', '8')
      ]),
      new Category(3, 'Pętle', [
        new Task(1, 'Suma liczb od 1 do N', 'Oblicz sumę liczb od 1 do N, gdzie N to liczba do której należy sumować.', '5', '15'),
        new Task(2, 'Wypisz liczby parzyste', 'Wypisz wszystkie liczby parzyste od 1 do N.', '10', '2, 4, 6, 8, 10'),
        new Task(3, 'Znajdź pierwszą liczbę większą od X', 'Przeszukaj tablicę i znajdź pierwszą liczbę większą od X. Użyj "break".', '[1, 2, 3, 10, 20]\n5', '10'),
        new Task(4, 'Pomijanie liczb ujemnych', 'Wypisz wszystkie liczby z tablicy, pomijając liczby ujemne. Użyj "continue".', '[1, -2, 3, -4, 5]', '1, 3, 5'),
        new Task(5, 'Tabliczka mnożenia', 'Wypisz tabliczkę mnożenia dla liczby N.', '3', '3, 6, 9, 12, 15'),
        new Task(6, 'Znajdź pierwsze wystąpienie zera', 'Przeszukaj tablicę i zakończ po znalezieniu pierwszego zera. Użyj "break".', '[5, 4, 0, 3, 2]', 'Indeks: 2'),
        new Task(7, 'Sumowanie liczb dodatnich', 'Zsumuj wszystkie liczby dodatnie w tablicy.', '[1, -3, 4, 5, -2]', '10'),
        new Task(8, 'Wypisz liczby większe od X', 'Wypisz wszystkie liczby z tablicy większe od X.', '[1, 10, 20, 5]\n7', '10, 20'),
        new Task(9, 'Sprawdź obecność liczby', 'Sprawdź, czy liczba X znajduje się w tablicy. Użyj "break".', '[2, 4, 6, 8]\n6', 'Tak'),
        new Task(10, 'Pomijanie wielokrotności liczby', 'Wypisz liczby od 1 do N, pomijając wielokrotności liczby X. Użyj "continue".', '10\n3', '1, 2, 4, 5, 7, 8, 10'),
        new Task(11, 'Oblicz silnię liczby', 'Oblicz silnię liczby N za pomocą pętli while.', '4', '24'),
        new Task(12, 'Znajdź pierwsze wystąpienie liczby parzystej', 'Przeszukaj tablicę i zatrzymaj po znalezieniu pierwszej liczby parzystej. Użyj "break".', '[1, 3, 5, 6, 7]', '6'),
        new Task(13, 'Wypisz liczby od 1 do N', 'Wypisz liczby od 1 do N w pętli while.', '5', '1, 2, 3, 4, 5'),
        new Task(14, 'Pomijanie liczb ujemnych', 'Wypisz liczby z tablicy, pomijając liczby ujemne. Użyj "continue".', '[1, -2, 3, -4, 5]', '1, 3, 5'),
        new Task(15, 'Sumowanie liczb do zera', 'Zsumuj liczby z tablicy do momentu, gdy natrafisz na zero. Użyj "break".', '[5, 3, 0, 7]', '8'),
        new Task(16, 'Znajdź największą liczbę w tablicy', 'Znajdź największą liczbę w tablicy.', '[1, 10, 5, 20, 3]', '20'),
        new Task(17, 'Oblicz sumę kwadratów liczb', 'Oblicz sumę kwadratów liczb od 1 do N w pętli while.', '3', '14'),
        new Task(18, 'Zatrzymaj po liczbie większej niż X', 'Zatrzymaj pętlę, gdy napotkasz liczbę większą niż X. Użyj "break".', '[2, 3, 8, 5]\n6', '8'),
        new Task(19, 'Pomijanie zer w tablicy', 'Wypisz liczby z tablicy, pomijając zera. Użyj "continue".', '[1, 0, 2, 0, 3]', '1, 2, 3'),
        new Task(20, 'Liczby podzielne przez X', 'Wypisz liczby od 1 do N, które są podzielne przez X.', '10\n2', '2, 4, 6, 8, 10'),
        new Task(21, 'Wypisz liczby od N do 1', 'Wypisz liczby od N do 1 w pętli do...while.', '5', '5, 4, 3, 2, 1'),
        new Task(22, 'Znajdź pierwszą liczbę większą od X', 'Przeszukaj tablicę i znajdź pierwszą liczbę większą od X. Użyj "break".', '[1, 2, 3, 10, 20]\n5', '10'),
        new Task(23, 'Wypisz elementy tablicy', 'Wypisz wszystkie elementy tablicy w pętli do...while.', '[1, 2, 3, 4]', '1, 2, 3, 4'),
        new Task(24, 'Sumowanie liczb dodatnich', 'Zsumuj wszystkie liczby dodatnie w tablicy.', '[1, -3, 4, 5, -2]', '10'),
        new Task(25, 'Wypisz liczby podzielne przez X', 'Wypisz liczby od 1 do N, które są podzielne przez X.', '10\n3', '3, 6, 9'),
        new Task(26, 'Pomijanie liczb większych od X', 'Wypisz liczby z tablicy, pomijając liczby większe od X. Użyj "continue".', '[2, 10, 3, 15]\n5', '2, 3'),
        new Task(27, 'Zatrzymaj po liczbie większej od X', 'Zatrzymaj pętlę po znalezieniu liczby większej niż X. Użyj "break".', '[1, 4, 6, 8, 3]\n5', '6'),
        new Task(28, 'Generowanie ciągu Fibonacciego', 'Wygeneruj ciąg Fibonacciego o długości N.', '5', '1, 1, 2, 3, 5'),
        new Task(29, 'Oblicz iloczyn liczb od 1 do N', 'Oblicz iloczyn liczb od 1 do N w pętli do...while.', '4', '24'),
        new Task(30, 'Pomijanie liczb ujemnych', 'Wypisz liczby z tablicy, pomijając liczby ujemne. Użyj "continue".', '[-1, 2, -3, 4, 5]', '2, 4, 5'),
        new Task(31, 'Pętla for', 'Stwórz pętle for, która wypisze liczby od 0 do 10.', '-', '0 1 2 3 4 5 6 7 8 9 10')
      ]),
      new Category(4, 'Tablice', [
        new Task(1, 'Wypisz elementy tablicy', 'Wypisz wszystkie elementy tablicy.', '[1, 2, 3, 4]', '1, 2, 3, 4'),
        new Task(2, 'Znajdź największy element', 'Znajdź największy element w tablicy.', '[1, 5, 3, 9, 2]', '9'),
        new Task(3, 'Znajdź najmniejszy element', 'Znajdź najmniejszy element w tablicy.', '[4, 2, 7, 1, 5]', '1'),
        new Task(4, 'Oblicz sumę elementów', 'Oblicz sumę wszystkich elementów tablicy.', '[2, 4, 6, 8]', '20'),
        new Task(5, 'Oblicz średnią arytmetyczną', 'Oblicz średnią arytmetyczną elementów tablicy.', '[3, 6, 9, 12]', '7.5'),
        new Task(6, 'Wypisz elementy większe od X', 'Wypisz elementy tablicy większe od X.', '[1, 3, 5, 7, 9]\n4', '5, 7, 9'),
        new Task(7, 'Znajdź indeks pierwszego wystąpienia X', 'Znajdź indeks pierwszego wystąpienia liczby X w tablicy.', '[2, 4, 6, 8, 10]\n6', '2'),
        new Task(8, 'Odwróć tablicę', 'Odwróć kolejność elementów w tablicy.', '[1, 2, 3, 4]', '[4, 3, 2, 1]'),
        new Task(9, 'Zlicz wystąpienia liczby X', 'Policz, ile razy liczba X występuje w tablicy.', '[1, 2, 2, 3, 4, 2]\n2', '3'),
        new Task(10, 'Usuń powtarzające się elementy', 'Usuń powtarzające się elementy z tablicy.', '[1, 2, 2, 3, 4, 4]', '[1, 2, 3, 4]'),
        new Task(11, 'Dodaj element na końcu', 'Dodaj element X na końcu tablicy.', '[1, 2, 3]\n4', '[1, 2, 3, 4]'),
        new Task(12, 'Usuń ostatni element', 'Usuń ostatni element z tablicy.', '[1, 2, 3, 4]', '[1, 2, 3]'),
        new Task(13, 'Dodaj element na początku', 'Dodaj element X na początku tablicy.', '[2, 3, 4]\n1', '[1, 2, 3, 4]'),
        new Task(14, 'Usuń pierwszy element', 'Usuń pierwszy element z tablicy.', '[1, 2, 3, 4]', '[2, 3, 4]'),
        new Task(15, 'Znajdź indeks ostatniego wystąpienia X', 'Znajdź indeks ostatniego wystąpienia liczby X w tablicy.', '[2, 4, 6, 4, 8]\n4', '3'),
        new Task(16, 'Sprawdź, czy X znajduje się w tablicy', 'Sprawdź, czy liczba X znajduje się w tablicy.', '[1, 3, 5, 7]\n5', 'Tak'),
        new Task(17, 'Znajdź elementy parzyste', 'Znajdź wszystkie elementy parzyste w tablicy.', '[1, 2, 3, 4, 5]', '[2, 4]'),
        new Task(18, 'Znajdź elementy nieparzyste', 'Znajdź wszystkie elementy nieparzyste w tablicy.', '[1, 2, 3, 4, 5]', '[1, 3, 5]'),
        new Task(19, 'Pomnóż elementy przez X', 'Pomnóż każdy element tablicy przez X.', '[1, 2, 3]\n2', '[2, 4, 6]'),
        new Task(20, 'Dodaj X do każdego elementu', 'Dodaj X do każdego elementu tablicy.', '[1, 2, 3]\n5', '[6, 7, 8]'),
        new Task(21, 'Oblicz sumę elementów większych od X', 'Oblicz sumę elementów tablicy większych od X.', '[2, 5, 8, 10]\n5', '18'),
        new Task(22, 'Znajdź najmniejszy element większy od X', 'Znajdź najmniejszy element w tablicy większy od X.', '[3, 7, 2, 8, 5]\n4', '5'),
        new Task(23, 'Podziel elementy przez X', 'Podziel każdy element tablicy przez X.', '[10, 20, 30]\n10', '[1, 2, 3]'),
        new Task(24, 'Usuń wszystkie wystąpienia X', 'Usuń wszystkie wystąpienia liczby X z tablicy.', '[1, 2, 3, 2, 4]\n2', '[1, 3, 4]'),
        new Task(25, 'Wypisz elementy na indeksach parzystych', 'Wypisz elementy tablicy znajdujące się na indeksach parzystych.', '[10, 20, 30, 40, 50]', '[10, 30, 50]'),
        new Task(26, 'Wypisz elementy na indeksach nieparzystych', 'Wypisz elementy tablicy znajdujące się na indeksach nieparzystych.', '[10, 20, 30, 40, 50]', '[20, 40]'),
        new Task(27, 'Znajdź liczbę elementów większych od X', 'Zlicz liczbę elementów w tablicy większych od X.', '[2, 5, 8, 10]\n6', '2'),
        new Task(28, 'Odwróć kolejność elementów', 'Odwróć kolejność elementów tablicy bez użycia wbudowanych metod.', '[1, 2, 3, 4]', '[4, 3, 2, 1]'),
        new Task(29, 'Stwórz nową tablicę z kwadratami elementów', 'Stwórz nową tablicę, gdzie każdy element to kwadrat elementu z oryginalnej tablicy.', '[1, 2, 3]', '[1, 4, 9]'),
        new Task(30, 'Usuń największy element', 'Usuń największy element z tablicy.', '[1, 5, 3, 9, 2]', '[1, 5, 3, 2]')
      ]),
      new Category(5, 'Tablice dwuwymiarowe', [
        new Task(1, 'Wypisz elementy tablicy 2D', 'Wypisz wszystkie elementy tablicy dwuwymiarowej w formie wierszy.', '[[1, 2], [3, 4]]', '1 2\n3 4'),
        new Task(2, 'Oblicz sumę elementów w tablicy 2D', 'Oblicz sumę wszystkich elementów w tablicy dwuwymiarowej.', '[[1, 2], [3, 4]]', '10'),
        new Task(3, 'Znajdź największy element w tablicy 2D', 'Znajdź największy element w tablicy dwuwymiarowej.', '[[1, 5], [3, 9]]', '9'),
        new Task(4, 'Znajdź najmniejszy element w tablicy 2D', 'Znajdź najmniejszy element w tablicy dwuwymiarowej.', '[[4, 2], [7, 1]]', '1'),
        new Task(5, 'Zlicz elementy większe od X', 'Zlicz elementy tablicy dwuwymiarowej większe od X.', '[[2, 4], [6, 8]]\n4', '3'),
        new Task(6, 'Oblicz średnią elementów w tablicy 2D', 'Oblicz średnią wszystkich elementów w tablicy dwuwymiarowej.', '[[2, 4], [6, 8]]', '5'),
        new Task(7, 'Dodaj X do każdego elementu', 'Dodaj wartość X do każdego elementu tablicy dwuwymiarowej.', '[[1, 2], [3, 4]]\n5', '[[6, 7], [8, 9]]'),
        new Task(8, 'Pomnóż każdy element przez X', 'Pomnóż każdy element tablicy dwuwymiarowej przez X.', '[[2, 3], [4, 5]]\n2', '[[4, 6], [8, 10]]'),
        new Task(9, 'Znajdź sumę elementów w każdym wierszu', 'Dla każdego wiersza w tablicy dwuwymiarowej oblicz sumę elementów.', '[[1, 2], [3, 4]]', '[3, 7]'),
        new Task(10, 'Znajdź sumę elementów w każdej kolumnie', 'Dla każdej kolumny w tablicy dwuwymiarowej oblicz sumę elementów.', '[[1, 2], [3, 4]]', '[4, 6]'),
        new Task(11, 'Znajdź maksymalny element w każdym wierszu', 'Znajdź największy element w każdym wierszu tablicy dwuwymiarowej.', '[[1, 5], [3, 9]]', '[5, 9]'),
        new Task(12, 'Znajdź minimalny element w każdej kolumnie', 'Znajdź najmniejszy element w każdej kolumnie tablicy dwuwymiarowej.', '[[4, 2], [7, 1]]', '[4, 1]'),
        new Task(13, 'Wypisz elementy na głównej przekątnej', 'Wypisz elementy znajdujące się na głównej przekątnej tablicy kwadratowej.', '[[1, 2], [3, 4]]', '[1, 4]'),
        new Task(14, 'Wypisz elementy na przeciwprzekątnej', 'Wypisz elementy znajdujące się na przeciwprzekątnej tablicy kwadratowej.', '[[1, 2], [3, 4]]', '[2, 3]'),
        new Task(15, 'Oblicz sumę elementów na głównej przekątnej', 'Oblicz sumę elementów na głównej przekątnej tablicy kwadratowej.', '[[1, 0], [0, 4]]', '5'),
        new Task(16, 'Oblicz sumę elementów na przeciwprzekątnej', 'Oblicz sumę elementów na przeciwprzekątnej tablicy kwadratowej.', '[[0, 2], [3, 0]]', '5'),
        new Task(17, 'Transponuj tablicę', 'Zamień wiersze z kolumnami w tablicy dwuwymiarowej.', '[[1, 2], [3, 4]]', '[[1, 3], [2, 4]]'),
        new Task(18, 'Usuń wiersz z najmniejszą sumą', 'Usuń wiersz z najmniejszą sumą elementów.', '[[1, 2], [3, 4]]', '[[3, 4]]'),
        new Task(19, 'Dodaj nowy wiersz na końcu', 'Dodaj nowy wiersz do tablicy dwuwymiarowej.', '[[1, 2], [3, 4]]\n[5, 6]', '[[1, 2], [3, 4], [5, 6]]'),
        new Task(20, 'Dodaj nową kolumnę na końcu', 'Dodaj nową kolumnę do tablicy dwuwymiarowej.', '[[1, 2], [3, 4]]\n[5, 6]', '[[1, 2, 5], [3, 4, 6]]'),
        new Task(21, 'Usuń kolumnę o największej sumie', 'Usuń kolumnę o największej sumie elementów.', '[[1, 2], [3, 4]]', '[[1], [3]]'),
        new Task(22, 'Znajdź indeks wiersza z największą sumą', 'Znajdź indeks wiersza z największą sumą elementów.', '[[1, 2], [3, 4]]', '1'),
        new Task(23, 'Oblicz iloczyn elementów w tablicy 2D', 'Oblicz iloczyn wszystkich elementów tablicy dwuwymiarowej.', '[[1, 2], [3, 4]]', '24'),
        new Task(24, 'Sprawdź, czy tablica zawiera element X', 'Sprawdź, czy tablica dwuwymiarowa zawiera element X.', '[[1, 2], [3, 4]]\n3', 'Tak'),
        new Task(25, 'Usuń powtarzające się elementy w wierszach', 'Usuń powtarzające się elementy w każdym wierszu tablicy.', '[[1, 1, 2], [3, 3, 4]]', '[[1, 2], [3, 4]]'),
        new Task(26, 'Oblicz liczbę wierszy o sumie większej niż X', 'Zlicz liczbę wierszy, których suma elementów jest większa niż X.', '[[1, 2], [3, 4]]\n3', '1'),
        new Task(27, 'Odwróć elementy w każdym wierszu', 'Odwróć kolejność elementów w każdym wierszu tablicy.', '[[1, 2], [3, 4]]', '[[2, 1], [4, 3]]'),
        new Task(28, 'Znajdź elementy większe od średniej', 'Znajdź elementy w tablicy dwuwymiarowej większe od średniej wszystkich elementów.', '[[1, 2], [3, 4]]', '[3, 4]'),
        new Task(29, 'Zastąp elementy zerowe', 'Zastąp wszystkie elementy o wartości 0 liczbą X.', '[[1, 0], [3, 0]]\n9', '[[1, 9], [3, 9]]'),
        new Task(30, 'Sprawdź, czy tablica jest kwadratowa', 'Sprawdź, czy liczba wierszy jest równa liczbie kolumn w tablicy.', '[[1, 2], [3, 4]]', 'Tak')
      ]),
      new Category(5, 'Obiekty i klasy', []),
    ]),
    new Technology(3, 'Python', [
      new Category(1, 'Zmienne, wyświetlanie i wypisywanie', [
        new Task(1, 'Skrypt ETL', 'Zadanie polega na stworzeniu skryptu ETL w Pythonie.', 'Plik CSV: dane.csv', 'Przetworzone dane zapisane w pliku przetworzone.csv')
      ]),
      new Category(2, 'Instrukcje Warunkowe', []),
      new Category(3, 'Pętle', []),
      new Category(4, 'Tablice', []),
      new Category(5, 'Tablice dwuwymiarowe', []),
    ])
  ];

  public getTaskList(){
    return this.tasks;
  }
  constructor() {
  }
}