export const getSections = async () => {
    const sections = await fetch('http://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard');
    const sectionData = await sections.json();

    return {
        sections: sectionData
    }
}

