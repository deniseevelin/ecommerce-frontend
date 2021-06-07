const validate = {
    email: (str) => {
        var rx = new RegExp("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*");
        var matches = rx.exec(str);
        if(matches != null && str == matches[0]){
            var validandox = str.split("@");
            validando = validandox[1].split(".");
            if(validando[0].length < 2){
                return false;
            }else{
                return true;
            }
        }else{
            return false;
        }
    }
}