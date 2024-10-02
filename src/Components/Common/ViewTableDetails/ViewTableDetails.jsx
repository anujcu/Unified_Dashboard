import './ViewTableDetails.css'

const ViewTableDetails=()=>{
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
            <input type='text' readOnly={true} className='formContorlInput readOnly' value="4th Member"/>
          </div>
          <div className='formContorlWrapper'>
            <label className='formContorlLabel'>Last Name</label>
            <input type='text' readOnly={true}  className='formContorlInput readOnly' value="4th"/>
          </div>
          <div className='formContorlWrapper'>
            <label className='formContorlLabel'>Contact Number</label>
            <input type='text' readOnly={true}  className='formContorlInput readOnly' value="Mamber"/>
          </div>
          <div className='formContorlWrapper'>
            <label className='formContorlLabel'>Contact Email</label>
            <input type='text' readOnly={true}  className='formContorlInput readOnly' value="anujcu@gmail.com"/>
          </div>
          <div className='formContorlWrapper'>
            <label className='formContorlLabel'>Role</label>
            <select type='text' disabled={true}  className='formContorlInput formContorlInputSelect readOnly'>
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
export default ViewTableDetails;