interface Device{
    TYP: string, 
    MODEL: string,
    PRODUCENT: string,
    OPIS: string,
    NUMER_EWIDENCYJNY: string,
    MAGAZYN: string
}
function addDevice({TYP, MODEL, PRODUCENT, OPIS, NUMER_EWIDENCYJNY, MAGAZYN}:Device){
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
    const query = `insert into sprzet([id_magazynu],[nr_ewidencyjny],[typ],[nazwa_producenta],[model],[stan_techniczny],[status],[data_zakupu]) values(${MAGAZYN}, '${NUMER_EWIDENCYJNY}', '${TYP}', '${PRODUCENT}','${MODEL}', 'A+','Wolny', '${stringdate}')`;
    console.log(query);
    fetch(`http://localhost:3001/query?query=${query}`)
}

export default addDevice;