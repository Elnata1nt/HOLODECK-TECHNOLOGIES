// Dependendo da biblioteca que você está usando, você pode querer usar `date-fns` ou `moment`.
// Aqui está um exemplo simples sem dependências externas.

export const formatDate = (date, format = 'YYYY-MM-DD') => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
  
    // Aqui você pode querer usar uma biblioteca para formatar a data com um formato mais específico.
    const [month, day, year] = formatter.formatToParts(date)
                                       .map(({ type, value }) => (type === 'month' || type === 'day' || type === 'year' ? value : ''))
                                       .filter(Boolean);
  
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day);
  };
  