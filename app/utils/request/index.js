const request = (payloadData, setResponseState) => {
  const {
    title, name, dob, location, dateTime,
  } = payloadData;
  const payload = {
    title: title.value,
    name: name.value,
    dob: dob.value,
    location: location.value,
    dateTime: dateTime.value,
  };
  fetch('/api/submit-survey', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response) {
        return response.json();
      }
      throw new Error('There was a problem receiving the response.');
    })
    .then(() => {
      setResponseState();
    })
    .catch((error) => {
      throw new Error(`There was a problem: ${error}`);
    });
};

export default request;
