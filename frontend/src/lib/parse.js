class Parse {

  static looseParse(obj){
    return Function('"use strict";return (' + obj + ')')()
}

}

export default Parse