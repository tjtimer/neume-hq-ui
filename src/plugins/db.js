const TJsDB = {
  install(components, options) {
    components.Model.fld = function() {
      return this.fields()
    }
  }
}

export default TJsDB
