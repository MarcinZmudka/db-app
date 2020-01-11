interface Employer{
    IMIĘ: string, 
    NAZWISKO: string,
    PESEL: string,
    DZIAŁ_FIRMY: string,
    STANOWISKO: string,
    MAGAZYN: string,
    FILIA: string
}
function addEmployer({IMIĘ, NAZWISKO, PESEL, DZIAŁ_FIRMY, STANOWISKO, MAGAZYN, FILIA}:Employer){
    const date = new Date();
    const year = date.getFullYear();
    let month: any = date.getMonth()+1;
    if(month < 10)
        month = `0${month}`;
    let day: any = date.getDay()+1;
    if(day < 10){
        day = "0"+day;
    }
    const stringdate = `${year}-${month}-${day} 10:25:18`;
    const query = `INSERT INTO pracownicy([id_filii],[imie],[nazwisko],[pesel],[id_dzialu],[id_stanowiska],[id_magazynu]) values(${FILIA}, '${IMIĘ}', '${NAZWISKO}', ${PESEL},${DZIAŁ_FIRMY}, ${STANOWISKO}, ${MAGAZYN} )`;
    console.log(query);
    fetch(`http://localhost:3001/query?query=${query}`)
}

export default addEmployer