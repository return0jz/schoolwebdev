const validateSession = function() {
        return fetch("/api/validate", {
            method: 'post',
        }).then(res => res.json())
          .then(data => {
          if (data?.validateFailed === true) {
            resolve();
          } else {
            reject();
          }
      });
}

export default validateSession;