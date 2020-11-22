using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class carScript : MonoBehaviour
{
    public float MotorForce, SteerForce, BrakeForce;
    public WheelCollider flw, frw, blw, brw;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float v = Input.GetAxis("Vertical") * MotorForce;
        float h = Input.GetAxis("Horizontal") * SteerForce;

        //back right wheel 
        brw.motorTorque = v;
        //back left wheel
        blw.motorTorque = v;

        //front right wheel
        frw.steerAngle = h;
        //front left wheel
        flw.steerAngle = h;

        if (Input.GetKey(KeyCode.Space))
        {
            brw.brakeTorque = BrakeForce;
            blw.brakeTorque = BrakeForce;
        }

        if (Input.GetKeyUp(KeyCode.Space))
        {
            brw.brakeTorque = 0;
            blw.brakeTorque = 0;

        }

        if(Input.GetAxis("Vertical") == 0)
        {
            brw.brakeTorque = BrakeForce;
            blw.brakeTorque = BrakeForce;
        }
        else
        {
            brw.brakeTorque = 0;
            blw.brakeTorque = 0;
        }


    }
}
