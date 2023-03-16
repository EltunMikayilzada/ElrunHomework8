function exercise(firstname) {

    firstname = firstname.trim().replace(",", '/').toUpperCase()
    
     newarray = firstname.split('');
    
     return newarray;
    }
    
    let result= exercise( "  eltun yasin vaqif  ");
    console.log(result); 