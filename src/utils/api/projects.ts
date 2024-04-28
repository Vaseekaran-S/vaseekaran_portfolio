import projects  from "../../data/projects.json"

export const getProject = (projectUrl: any) => {
    const project = projects.filter((project)=> project.url === projectUrl)
    return project[0];
}
