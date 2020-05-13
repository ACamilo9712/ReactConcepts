export const getData = ({ setProducts }) => {
    const url = "http://localhost:8080/api/v1/times/list";
  
    setProducts({ loading: true });
  
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setProducts({ data: response, loading: false });
      })
      .catch(() => {
        setProducts({
          error: "Error en la peticion de productos",
        });
      })
  };