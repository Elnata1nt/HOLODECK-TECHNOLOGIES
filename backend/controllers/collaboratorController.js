
const listProjectCollaborators = async (req, res) => {
    req.userId 
    req.userName
 return res.json({ success: true, message: 'Lista de colaboradores ' + req.userId + ' - '+ req.userName });
};

export default  { listProjectCollaborators }