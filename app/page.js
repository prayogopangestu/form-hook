"use client"


import {useForm} from "react-hook-form"
import {Input} from "react-daisyui";

export default function Home() {

  const {register: registrasiAwal,
    watch : watchAwal,
    handleSubmit : handleSubmitAwal, formState: {errors:errorsA}} = useForm();
  const onSubmit = (data)=> console.log(data);


  return (
    <div>
      <div className=''>
      <div className="bg-sky-500 py-5 ">
          <div className=" flex  space-x-5  ml-5 text-white">
            <div>Menu</div>
            <div>Contact</div>
            <div>About</div>
          </div>

      </div>

      
        
        <form>
          <div className="border m-5 rounded-lg shadow-lg"> 
            <div className='grid grid-cols-5 gap-4 m-5 text-sm'>
            
                <label className="grid grid-flow-row auto-rows-max"> Tgl Pendaftaran
                  <Input className="w-full border rounded-lg bg-gray"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>

                <label className="grid grid-flow-row auto-rows-max"> No RM
                  <Input className="w-full border rounded-lg"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>

                <label className="grid grid-flow-row auto-rows-max"> Cara Bayar
                  <Input className="w-full border rounded-lg"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>

                <label className="grid grid-flow-row auto-rows-max"> DPJP
                  <Input className="w-full border rounded-lg"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>

                <label className="grid grid-flow-row auto-rows-max"> DPJP
                  <Input className="w-full border rounded-lg"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>
                    
                <label className="grid grid-flow-row auto-rows-max"> Umur
                  <Input className="w-full border rounded-lg"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>

                <label className="grid grid-flow-row auto-rows-max"> Alamat
                  <Input className="w-full border rounded-lg"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>

                <label className="grid grid-flow-row auto-rows-max font-bold" > Nomor SKU
                  <Input className="w-full border rounded-lg"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
                </label>
          </div>


          <div className="grid grid-cols-2 gap-4 "> 

          <div className="m-5 text-sm">
              <label className="grid grid-flow-row auto-rows-max font-bold " > Anamnesia (S)
                  <Input className="w-full border rounded-lg h-32"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
              </label>

              <label className="grid grid-flow-row auto-rows-max font-bold " > Pemeriksaan Fifik dan Uji Fungsi (O)
                  <Input className="w-full border rounded-lg h-20"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
              </label>

              <label className="grid grid-flow-row auto-rows-max font-bold " > Anjuran
                  <Input className="w-full border rounded-lg h-10"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
              </label>

              <label className="grid grid-flow-row auto-rows-max font-bold " > Evaluasi
                  <Input className="w-full border rounded-lg h-10"
                    size="sm"
                    {...registrasiAwal("tgl_pendaftar")}
                  />
              </label>

              <div className="grid grid-flow-col auto-cols-auto gap-4 ">
                  <label className=""> Suspek Penyakit Akibat Kerja
                      <Input 
                        type="radio"
                        name="suspek_penyakit_akibat_kerja"
                        value="Ya"
                        checked={
                        watchAwal("suspek_penyakit_akibat_kerja") == "Ya"
                        }
                        onChange={handleSubmitAwal}
                        className="form-radio " 
                        />
                        <span className="w-full ml-1">
                        Ya
                        </span>
                        
                        <Input className=" border rounded-lg "
                        size="sm"
                        {...registrasiAwal("tgl_pendaftar")}
                        />


                        <Input
                        type="radio"
                        name="suspek_penyakit_akibat_kerja"
                        value="Tidak"
                        checked={
                        watchAwal("suspek_penyakit_akibat_kerja") == "Tidak"
                        }
                        onChange={handleSubmitAwal}
                        className="form-radio"
                        />
                        <span className="w-full ml-1">
                        Tidak
                        </span>
                  </label>

              </div>


          </div>

          <div className="h-20 bg-black">

          </div>


          </div>
      </div>
    </form>
          
          {/* <form>

          <div className="grid grid-cols-3 gap-2 border rounded-lg m-5 ">
            <div className="ml-10 col-span-2 ">
              <div className="  ">
                  <h1 className="text-sxl font-bold ">Product Details</h1>
              </div>

              <div className="py-10 rounded-lg grid grid-flow-row auto-rows-max p-5 ">

                      

                    

                    <label className="">Nama  :
                    <input className="ml-5 border"
                    type="text"
                    
                    {...register("fullname",{required:"masukan nama anda"})}
                    />
                    {errors.fullname&&<p>{errors.fullname.message}</p>}
                    </label>

                    <label className="">Alamat :
                    <input className="ml-4 border"
                    type="text"
                    
                    {...register("alamat",{required:true})}
                    />
                    </label>

                    <label className="p-5">jenis kelamin :
                    <input className="ml-4"
                    type="text"
                    
                    {...register("jeniskelamin",{required:true})}
                    />
                    </label>

                  

                    

                    <div className="py-12">

                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mx-20" type="button" onClick={handleSubmit(onSubmit)}> Pilih</button>
              </div>
            
              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Payments</h1>
              </div>
              <div className=" bg-green-300 py-10 rounded-lg">
                <div className="h-40"> 

                </div>
              </div>

              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Shipping</h1>
              </div>
              <div className=" bg-green-300 py-10 rounded-lg">
                <div className="h-20"> 

                </div>
              </div>

            </div>
            <div> 
              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Sale Sumaary</h1>
              </div>
              <div className="bg-green-300 py-20 rounded-lg mr-10">
                <div className="h-80"> 

                </div>
              </div>

              <div className="py-5  ">
                  <h1 className="text-sxl font-bold ">Buyer</h1>
              </div>
              <div className="bg-green-300 py-20 rounded-lg mr-10">
                <div className="h-19"> 

                </div>
              </div>
              </div>

              <div className="py-5">

              </div>
          </div>

          </form> */}




              <div className="bg-teal-800 py-5 "> 
              <div className="h-15">

              </div>
                <h1>FOOTER</h1>
              </div>
    </div>

    </div>
  )
}
