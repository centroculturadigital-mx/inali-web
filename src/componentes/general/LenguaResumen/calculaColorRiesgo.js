export default (riesgoLengua) => {
    switch (riesgoLengua) {
      case 0:
        return 'RiesgoBajo';
        break;
      case 1:
        return 'RiesgoMedioBajo';
        break;
      case 2:
        return 'RiesgoMedioAlto';
        break;
      case 3:
        return 'RiesgoAlto';
        break;
    } 
  }