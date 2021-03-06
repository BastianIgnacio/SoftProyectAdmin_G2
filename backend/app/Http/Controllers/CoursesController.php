<?php

namespace App\Http\Controllers;

use App\Course;
use App\Tools\UserProfile;
use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CoursesController extends Controller
{

    public function getCursos(){
        return Course::all();
    }

    public function getCurso($id){
        $curso = Course::find($id);
        if($curso!=null){
            return response()->json($curso);
        }else{
            return response()->json([
                'msg' => 'El curso no existe'
            ], 500);
        }
    }

    /**
     * Crear un curso
     */
    public function crearCurso(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'year' => 'required',
            'semester' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }
        $user = Auth::user();
        $curso = new Course();
        $curso->name = $request->name;
        $curso->year = $request->year;
        $curso->semester = $request->semester;
        $curso->idUser = $user->id;
        $curso->save();

        return response()->json([
            'status' => 200,
            'msg' => 'Curso creado correctamente.'
        ]);
    }

    /**
     * Editar un curso
     */
    public function editarCurso(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'year' => 'required',
            'semester' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }
        $curso = Course::find($id);
        $curso->name = $request->name;
        $curso->year = $request->year;
        $curso->semester = $request->semester;
        $curso->idUser = Auth::user()->id;
        $curso->save();

        return response()->json([
            'status' => 200,
            'msg' => 'Curso editado correctamente.'
        ]);
    }

    public function eliminarCurso($id)
    {
        $user = Course::find($id);
        $user->delete();
        return response()->json([
            'status' => 200,
            'msg' => 'Curso eliminado correctamente.'
        ]);
    }



    /**
     * Asignar un profesor a un curso
     */
    public function asignarProfesorACurso(Request $request)
    {
        $this->validate($request, [
            'iduser' => 'required',
            'idcourse' => 'required',
        ]);
        $user = User::find($request->iduser);
        $course = Course::find($request->idcourse);
        if($user!=null&&$course!=null){
            if(UserProfile::isTeacher($user)){
                $course->users()->sync($user, false);
                return response()->json([
                    'status' => 200,
                    'msg' => 'Profesor asignado correctamente.'
                ]);
            }else{
                return response()->json([
                    'status' => 500,
                    'msg' => 'El usuario no es profesor.'
                ]);
            }
        }else{
            return response()->json([
                'status' => 500,
                'msg' => 'El usuario/curso no existe.'
            ]);
        }
    }

    public function getUserList(Request $request, $id){
        $curso = Course::find($id);
        if($curso!=null){
            return response()->json($curso->users);
        }else{
            return response()->json([
                'msg' => 'El curso no existe'
            ], 500);
        }
    }

    public function createAndAdd(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'year' => 'required',
            'semester' => 'required',
            'teacher_id' => 'required',
            'students' => 'required|array',
        ]);

        if ($validator->fails()) {
            return ['errors'=>$validator->errors()];
        }

        $curso = new Course();
        $curso->name = $request->name;
        $curso->year = $request->year;
        $curso->semester = $request->semester;
        $curso->idUser = $request->teacher_id;

        try {
            $curso->save();
            $n = 0;
            foreach($request->students as $student){
                $curso->users()->sync($student['user_id'], false);
                $n++;
            }
        }catch(Exception $ex){
            return response()->json([
                'status' => false,
                'msg' => 'El curso no se pudo crear.',
                'error' => $ex->getMessage()
            ]);
        }

        return response()->json(["status" => true, "enrolled" => $n, "msg" => "Proyecto creado correctamente."]);
    }

    /*

    public function asignarAyudanteACurso(Request $request)
    {
        $this->validate($request, [
            'idCurso' => 'required',
            'idAyudante' => 'required',
        ]);

        $idCurso = $request->input('idCurso');
        $idAyudante = $request->input('idAyudante');

        $curso = Course::find($idCurso);
        $ayudante = User::find($idAyudante);


    */
}
