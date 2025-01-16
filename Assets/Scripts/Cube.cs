using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Cube : MonoBehaviour
{
    public float rotationTimer;
    private bool isRotating;
   
    [ContextMenu("Up")]
    public void RotateUpward() 
    {
        if (!isRotating)            
            StartCoroutine(RotateCube(transform.rotation, Quaternion.AngleAxis(90, Vector3.right) * transform.rotation));
    }

    [ContextMenu("Down")]
    public void RotateDownward()
    {
        if (!isRotating)
            StartCoroutine(RotateCube(transform.rotation, Quaternion.AngleAxis(-90, Vector3.right) * transform.rotation));
    }

    [ContextMenu("Left")]
    public void RotateLeftward()
    {
        if (!isRotating)
            StartCoroutine(RotateCube(transform.rotation, Quaternion.AngleAxis(90, Vector3.up) * transform.rotation));
    }

    [ContextMenu("Right")]
    public void RotateRightward()
    {
        if (!isRotating)
            StartCoroutine(RotateCube(transform.rotation, Quaternion.AngleAxis(-90, Vector3.up) * transform.rotation));
    }


    private IEnumerator RotateCube(Quaternion startRot, Quaternion endRot)
    {
        isRotating = true;
        
        float t = 0;
        float timeStep = 1 / rotationTimer;

        while (t < 1)
        {
            transform.rotation = Quaternion.Lerp(startRot, endRot, t);
            t += timeStep;

            yield return null;
        }

        transform.rotation = endRot;

        isRotating = false;
    }
}
