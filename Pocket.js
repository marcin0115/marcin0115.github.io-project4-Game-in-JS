
    class Pocket {
        constructor(money) {
            let _money = money;

            this.getPocketValue = ()=> _money;

            this.checkCanPlay = value=> {
                if(_money >= value) return true;
                else return false;
            }

            this.changePocket = (value, type='+')=> {
                if(typeof value==='number' && !isNaN(value)) {
                    if(type==='+') {
                        return _money += value;
                    } else if(type==='-') {
                        return _money -= value;
                    } else {
                        throw Error('Błąd')
                    }
                } else {
                    throw Error('Błąd')
                }
            }
        }
    }



    

