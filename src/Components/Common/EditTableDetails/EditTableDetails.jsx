import './EditTableDetails.css'

const EditTableDetails=()=>{
  return(
    <div className='TableDetailsWrapper'>
      <div className='TableDetailsInner'>
        <div className='TableDetailsHeader'>
          <h1 className='TableDetailsHeaderTitle'>Member Details</h1>
          <div className='TableSelectedDetails'>
            <div className='TableSelectedDetailsLeft'>
            <div class="circularTextClip color1">4th</div>
            <span class="tableBodyCellValue">4th Member</span>
            <span class="tableBodyCellBadge badgeInvited">
              <img src="./src/assets/img/Icon_invitedBadge.svg" alt="iconInvitedBadge" class="tabFilterBtnADDIMG"/> Invited
              </span>
              </div>
              <div className='TableSelectedDetailsRight'>
                <div className='TableMoreDetailsMenu'>
                  <button className='TableMoreAction'>More Options</button>
                <div className='TableMoreActionDetails'></div>
                </div>
              </div>
          </div>
        </div>
        <div className='TableDetailsBody'>
            <div className='formContorlWrapper'>
              <label className='formContorlLabel'>First Name</label>
              <input type='text' className='formContorlInput'/>
            </div>
            <div className='formContorlWrapper'>
              <label className='formContorlLabel'>Last Name</label>
              <input type='text' className='formContorlInput'/>
            </div>
            <div className='formContorlWrapper'>
              <label className='formContorlLabel'>Contact Number</label>
              <input type='text' className='formContorlInput'/>
            </div>
            <div className='formContorlWrapper'>
              <label className='formContorlLabel'>Contact Email</label>
              <input type='text' className='formContorlInput'/>
            </div>
            <div className='formContorlWrapper'>
              <label className='formContorlLabel'>Role</label>
              <select type='text' className='formContorlInput formContorlInputSelect'>
                <option>Admin</option>
              </select>
            </div>
          
        </div>
        <div className='TableDetailsFooter'>
          <button className='TableDetailsBtn'>Cancel</button>
          <button className='TableDetailsBtn Btn_Primary'>Save</button>
        </div>
      </div>
     
    </div>
   
  )
}
export default EditTableDetails;