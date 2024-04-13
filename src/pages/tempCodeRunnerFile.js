  const updateColor = (id, color) => {
    if (selectedElementId === id) {
      const updatedElements = elements.map((el) =>
        el.id === id ? { ...el, color } : el
      );
      setElements(updatedElements);
    }
    console.log(`Changed color for ${selectedElementId}` )
  };