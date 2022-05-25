import React,{useState} from 'react'
import './Form.css'

const Form = () => {

    const [error, setError] = useState({});

    const [source, setSource] = useState('');
    const [pipeline, setPipeline] = useState('');
    const [project, setProject] = useState('');
    const [bucket, setBucket] = useState('');
    const [file, setFile] = useState('');
    const [credential, setCredential] = useState('');
    const [runEvery, setRunEvery] = useState('');

    

    function charCheck(value,fieldName){

        if(value[0] === '-' || value[0] === '+' || value[0] === '_'){
            setError({...error, [fieldName]:"Can not start with '-','_','+'"})
        }
        else{
            setError({...error, fieldName:""})
            return true;
        }
    }
    function lenCheck(value,fieldName){
        if(value.length<5){
            setError({...error, [fieldName]:"Length should have 5 characters minimum"})
        }
        else{
            setError({...error, [fieldName]:""})
            return true;
        }
    }
    
    function specialCharCheck(value,fieldName){
        let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
        for (var i = 0; i < value.length; i++) {
            if (spChar.indexOf(value.charAt(i)) != -1) {
                setError({...error, [fieldName]:"Should not contain special characters"})
                return false;
            }
        }
        setError({...error, [fieldName]:""})
        return true;
    }

    const validate = (value,fieldName) => {
        if(charCheck(value,fieldName)){
            if(lenCheck(value,fieldName)){
                if(specialCharCheck(value,fieldName)){
                    return false;
                }
            }
        }
        if(value.length==0){
            setError({...error, [fieldName]:" "})
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(source==='' || pipeline==='' || project==='' || bucket==='' || file==='' || credential==='' || runEvery===''){
            alert("Please fill all the fields");
            return;
        }    
        if(Object.values(error).every(x => x === '')){;
            alert("Form Submitted");
        }
        else{
            alert("Please check the errors");
        }
    }




  return (
    <>
        <h2>Validation form</h2>
        <form action="">
            <div className="form-group">
                <div className="container">
                    <div className="label-div">
                        <label htmlFor="">Select your source:</label>
                    </div>
                    <div className="input-div">
                        <input value={source} onChange={(e)=>{validate(e.target.value, "sourceField");setSource(e.target.value)}} type="text" className="form-control" id="" placeholder="Google Cloud Storage" />
                    </div>
                </div>
                {error.sourceField ? <span className="error">{error.sourceField}</span> : null}
            </div>
            <div className="form-group">
            <div className="container">
                <div className="label-div">
                    <label htmlFor="">Provide a name for pipeline:</label>
                </div>
                <div className="input-div">
                    <input value={pipeline} onChange={(e)=>{validate(e.target.value, "pipelineField");setPipeline(e.target.value)}}  type="text" className="form-control" id="" placeholder="e.g., cust_shop_energy_gateway001" />
                </div>
            </div>
                    {error.pipelineField ? <span className="error">{error.pipelineField}</span> : null}
            </div>

            <div className="form-group">
                <div className="container">
                    <div className="label-div">
                        <label htmlFor="">GCS project name :</label>
                    </div>
                    <div className="input-div">
                        <input value={project} onChange={(e)=>{validate(e.target.value, "projectName");setProject(e.target.value)}} type="text" className="form-control" id="" placeholder="project-id" />
                    </div>
                </div>
                {error.projectName ? <span className="error">{error.projectName}</span> : null}
            </div>
            
            <div className="form-group">
                <div className="container">

                    <div className="label-div">
                        <label htmlFor="">GCS bucket name :</label>
                    </div>
                    <div className="input-div">
                        <input value={bucket} onChange={(e)=>{validate(e.target.value, "bucketName");setBucket(e.target.value)}} type="text" className="form-control" id="" placeholder="gs://your-bucket" />
                    </div>
                </div>
                {error.bucketName ? <span className="error">{error.bucketName}</span> : null}
            </div>
            <div className="form-group">

                <div className="container">
                    <div className="label-div">
                        <label htmlFor="">Input Cloud storage file(s) :</label>
                    </div>
                    <div className="input-div">
                        <input value={file} onChange={(e)=>{validate(e.target.value, "cloudStorageFile");setFile(e.target.value)}} type="text" className="form-control" id="" placeholder="GCS location of your files" />
                    </div>
                </div>

                {error.cloudStorageFile ? <span className="error">{error.cloudStorageFile}</span> : null}
            </div>
            <div className="form-group">
                <div className="container">

                    <div className="label-div">
                        <label htmlFor="">GCS credentials :</label>
                    </div>
                    <div className="input-div">
                        <input value={credential} onChange={(e)=>{validate(e.target.value, "credential");setCredential(e.target.value)}} type="text" className="form-control" id="" placeholder="Enter your name" />
                    </div>
                </div>
                {error.credential ? <span className="error">{error.credential}</span> : null}
            </div>
            <div className="form-group">
                <div className="container">

                    <div className="label-div">
                        <label htmlFor="">Run Every :</label>
                    </div>
                    <div className="input-div">
                        <input value={runEvery} required onChange={(e)=>{validate(e.target.value, "runEvery");setRunEvery(e.target.value)}} type="number" className="form-control" id="" placeholder="(in minutes)" />
                    </div>
                </div>
                {error.runEvery ? <span className="error">{error.runEvery}</span> : null}
            </div>
           
           <div className="btn-container">
            <button className={"submitBtn btn"} onClick={(e)=>handleSubmit(e)} type="submit">Create</button>
            <button className='cancelBtn btn' type="reset">Cancel</button>
           </div>

        </form>
    </>
  )
}

export default Form