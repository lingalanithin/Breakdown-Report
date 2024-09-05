import React, { useState } from "react";
import "./EquipmentForm.css"; 

const EquipmentForm = () => {
  
  const [formData, setFormData] = useState({
    site: "",
    transactionID: "",
    transactionDate: "",
    assetCode: "",
    subCode: "",
    breakdownType: "",
    model: "",
    breakdownDate: "",
    breakdownTime: "",
    repairedDate: "",
    repairedTime: "",
    repairStatus: "",
    issues: "",
    mechIncharge: "",
    actionTaken: "",
  });

  
  const [queriesData, setQueriesData] = useState({
    mechanic: "",
    repeatedProblem: "",
    fuelPumpStatus: "",
    engMotorStatus: "",
    meter: "",
    leakages: "",
    typeStatus: "",
    batteryStatus: "",
    secondMeter: "",
    fuelPumpSystem: "",
    gasCondition: "",
    radiatorStatus: "",
    sparesCost: "",
    serviceCost: "",
    totalCost: "",
    sparesUsed: "",
    remarks: "",
    documentAttached: null, 
  });

  const [equipmentType, setEquipmentType] = useState(""); 

  
  const handleBreakdownInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleQueriesInputChange = (e) => {
    const { name, value, files } = e.target;
    setQueriesData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleEquipmentTypeChange = (e) => {
    setEquipmentType(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("FormData:", formData);
    console.log("QueriesData:", queriesData);
  };

  return (
    <div className="form-container">
      <h2>Breakdown Report</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group full-width">
          <label>Site:</label>
          <input
            type="text"
            name="site"
            value={formData.site}
            onChange={handleBreakdownInputChange}
          />
        </div>

        
        <div className="form-grid">
          <div className="form-column">
            <div className="form-group">
              <label>Transaction ID:</label>
              <input
                type="text"
                name="transactionID"
                value={formData.transactionID}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Equipment Type:</label>
              <select value={equipmentType} onChange={handleEquipmentTypeChange}>
                <option value="">Select Equipment Type</option>
                <option value="vehicle">Vehicle / Machinery</option>
                <option value="powerTools">Power Tools</option>
              </select>
            </div>
            <div className="form-group">
              <label>Type:</label>
              <select>
                <option value="">Select Equipment Type</option>
              </select>
            </div>
            <div className="form-group">
              <label>Model:</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Breakdown Date:</label>
              <input
                type="date"
                name="breakdownDate"
                value={formData.breakdownDate}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Repaired Date:</label>
              <input
                type="date"
                name="repairedDate"
                value={formData.repairedDate}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Repair Status:</label>
              <input
                type="text"
                name="repairStatus"
                value={formData.repairStatus}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Issues:</label>
              <input
                type="text"
                name="issues"
                value={formData.issues}
                onChange={handleBreakdownInputChange}
              />
            </div>
          </div>

          <div className="form-column">
            <div className="form-group">
              <label>Transaction Date:</label>
              <input
                type="date"
                name="transactionDate"
                value={formData.transactionDate}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Asset Code/Name:</label>
              <select>
                <option value="">Select Type</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sub-Code:</label>
              <select>
                <option value="">Select Type</option>
              </select>
            </div>
            <div className="form-group">
              <label>Breakdown Type:</label>
              <select>
                <option value="">Select Type</option>
              </select>
            </div>
            <div className="form-group">
              <label>Breakdown Time:</label>
              <input
                type="text"
                name="breakdownTime"
                value={formData.breakdownTime}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Repaired Time:</label>
              <input
                type="text"
                name="repairedTime"
                value={formData.repairedTime}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Mech. Incharge:</label>
              <input
                type="text"
                name="mechIncharge"
                value={formData.mechIncharge}
                onChange={handleBreakdownInputChange}
              />
            </div>
            <div className="form-group">
              <label>Action Taken:</label>
              <input
                type="text"
                name="actionTaken"
                value={formData.actionTaken}
                onChange={handleBreakdownInputChange}
              />
            </div>
          </div>
        </div>
        
        <div className="form-separator"></div>

        {equipmentType === 'vehicle' && (
          <div className="vehicle-form">
            <h3>Vehicle / Machinery - Queries Details</h3>

            <div className="form-grid">
              <div className="form-column">
                <div className="form-group">
                  <label>Mechanic:</label>
                  <input
                    type="text"
                    name="mechanic"
                    value={queriesData.mechanic}
                    onChange={handleQueriesInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Repeated Problem:</label>
                  <select name="repeatedProblem" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Fuel Pump Status:</label>
                  <select name="fuelPumpStatus" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Eng/Motor Status:</label>
                  <select name="engMotorStatus" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Spares Cost:</label>
                  <input
                    type="text"
                    name="sparesCost"
                    value={queriesData.sparesCost}
                    onChange={handleQueriesInputChange}
                  />
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label>1st Km/Hr Meter:</label>
                  <input
                    type="text"
                    name="meter"
                    value={queriesData.meter}
                    onChange={handleQueriesInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Leakages:</label>
                  <select name="leakages" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Type Status:</label>
                  <select name="typeStatus" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Battery Status:</label>
                  <select name="batteryStatus" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Service Cost:</label>
                  <input
                    type="text"
                    name="serviceCost"
                    value={queriesData.serviceCost}
                    onChange={handleQueriesInputChange}
                  />
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label>2nd Km/Hr Meter:</label>
                  <input
                    type="text"
                    name="secondMeter"
                    value={queriesData.secondMeter}
                    onChange={handleQueriesInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Fuel Pump System:</label>
                  <select name="fuelPumpSystem" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Gas/O+ Condition:</label>
                  <select name="gasCondition" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Radiator Status:</label>
                  <select name="radiatorStatus" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Total Cost:</label>
                  <input
                    type="text"
                    name="totalCost"
                    value={queriesData.totalCost}
                    onChange={handleQueriesInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group full-width">
              <label>Spares Used:</label>
              <input
                type="text"
                name="sparesUsed"
                value={queriesData.sparesUsed}
                onChange={handleQueriesInputChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Remarks:</label>
              <input
                type="text"
                name="remarks"
                value={queriesData.remarks}
                onChange={handleQueriesInputChange}
              />
            </div>
            <div className="form-group">
              <label>Document Attached:</label>
              <input
                type="file"
                name="documentAttached"
                onChange={handleQueriesInputChange}
              />
            </div>
          </div>
        )}

        {equipmentType === 'powerTools' && (
          <div className="power-tools-form">
            <h3>Power Tools - Queries Details</h3>

            <div className="form-grid">
              <div className="form-column">
                <div className="form-group">
                  <label>Mechanic:</label>
                  <input
                    type="text"
                    name="mechanic"
                    value={queriesData.mechanic}
                    onChange={handleQueriesInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Dead Man Switch:</label>
                  <input
                    type="text"
                    name="deadManSwitch"
                    value={queriesData.deadManSwitch}
                    onChange={handleQueriesInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Repeated Problem:</label>
                  <input
                    type="text"
                    name="repeatedProblem"
                    value={queriesData.repeatedProblem}
                    onChange={handleQueriesInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Spares Cost:</label>
                  <input
                    type="number"
                    name="sparesCost"
                    value={queriesData.sparesCost}
                    onChange={handleQueriesInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Total Cost:</label>
                  <input
                    type="number"
                    name="totalCost"
                    value={queriesData.totalCost}
                    onChange={handleQueriesInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Remarks:</label>
                  <input
                    type="text"
                    name="remarks"
                    value={queriesData.remarks}
                    onChange={handleQueriesInputChange}
                  />
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label>Machine handle condition:</label>
                  <select name="machineHandleCondition" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>

                <div className="form-group">
                  <label>Machine cable condition:</label>
                  <select name="machineCableCondition" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    
                  </select>
                </div>

                <div className="form-group">
                  <label>Wheel guard condition:</label>
                  <select name="wheelGuardCondition" onChange={handleQueriesInputChange}>
                    <option value="">Select Type</option>
                    {/* Add options here */}
                  </select>
                </div>

                <div className="form-group">
                  <label>Service Cost:</label>
                  <input
                    type="number"
                    name="serviceCost"
                    value={queriesData.serviceCost}
                    onChange={handleQueriesInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Document Attached:</label>
                  <input
                    type="file"
                    name="documentAttached"
                    onChange={handleQueriesInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <button type="submit">UPLOAD</button>
      </form>
    </div>
  );
};

export default EquipmentForm;